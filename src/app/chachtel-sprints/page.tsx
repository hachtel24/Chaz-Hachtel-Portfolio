import { Metadata } from "next";
import SprintsContent from "./SprintsContent";

export const metadata: Metadata = {
    title: "Chachtel Sprints | Fast Web & Marketing Services",
    description: "Sprint-based web development and marketing services for restaurants and small businesses. Websites, menus, and graphics in days, not months.",
};

export default function ChachtelSprintsPage() {
    return <SprintsContent />;
}
