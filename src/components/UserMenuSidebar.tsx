import React from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface UserMenuSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
  onDeleteProfile: () => void;
}

export const UserMenuSidebar = ({
  isOpen,
  onClose,
  onLogout,
  onDeleteProfile,
}: UserMenuSidebarProps) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
      <aside className="fixed top-0 right-0 w-64 sm:w-80 h-full bg-white shadow-lg z-50 p-4 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">User Menu</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>
        <Button
          variant="outline"
          className="mb-2"
          onClick={() => {
            onLogout();
            onClose();
          }}
        >
          Logout
        </Button>
          <Button
            variant="outline"
            className="mb-2"
            onClick={() => {
              onClose();
              setTimeout(() => {
                // Open EditProfileModal after closing sidebar
                window.dispatchEvent(new CustomEvent("openEditProfileModal"));
              }, 300);
            }}
          >
            Edit Profile
          </Button>
        <Button
          variant="destructive"
          onClick={() => {
            onDeleteProfile();
            onClose();
          }}
        >
          Delete Profile
        </Button>
      </aside>
    </>
  );
};
