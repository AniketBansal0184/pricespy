import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock } from "lucide-react";
import { categories } from "@/data/categories";

interface NearbyStoresModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface NominatimPlace {
  place_id: string;
  display_name: string;
  lat: string;
  lon: string;
  type: string;
  address: {
    [key: string]: string;
  };
}

export const NearbyStoresModal = ({ isOpen, onClose }: NearbyStoresModalProps) => {
  const [nearbyStores, setNearbyStores] = useState<NominatimPlace[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      if (!navigator.geolocation) {
        setError("Geolocation is not supported by your browser.");
        return;
      }

      setLoading(true);
      setError(null);

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            // Fetch nearby shops from OpenStreetMap Nominatim API
            const response = await fetch(
              `https://nominatim.openstreetmap.org/search?format=json&` +
              `q=store&` +
              `limit=20&` +
              `lat=${latitude}&lon=${longitude}&addressdetails=1`
            );

            if (!response.ok) {
              throw new Error("Failed to fetch nearby stores.");
            }

            const data: NominatimPlace[] = await response.json();

            // Filter places to those that are shops or stores
            const filteredStores = data.filter(place =>
              place.type === "shop" || place.type === "store" || place.type === "supermarket"
            );

            setNearbyStores(filteredStores);
          } catch (err) {
            setError((err as Error).message);
          } finally {
            setLoading(false);
          }
        },
        () => {
          setError("Unable to retrieve your location.");
          setLoading(false);
        }
      );
    } else {
      setNearbyStores([]);
      setError(null);
      setLoading(false);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Nearby Stores Selling Our Subcategories
          </DialogTitle>
        </DialogHeader>

        {loading && (
          <div className="text-center py-8">Loading nearby stores...</div>
        )}

        {error && (
          <div className="text-center py-8 text-red-600">{error}</div>
        )}

        {!loading && !error && (
          <>
            {nearbyStores.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground">
                  No nearby stores found selling our subcategories offline.
                </p>
              </div>
            ) : (
              <div className="space-y-4 mt-4">
                {nearbyStores.map((store) => (
                  <div
                    key={store.place_id}
                    className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold">{store.display_name}</h3>
                      <Badge variant="secondary">Offline Store</Badge>
                    </div>

                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{store.address.road || store.address.neighbourhood || store.address.suburb || store.address.city || "Address not available"}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span>{store.address.phone || "Phone not available"}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>Hours not available</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        <div className="flex justify-end mt-6">
          <Button onClick={onClose}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
