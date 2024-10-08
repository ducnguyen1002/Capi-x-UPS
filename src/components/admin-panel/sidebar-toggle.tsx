import { ChevronLeft } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarToggleProps {
	isOpen: boolean | undefined;
	setIsOpen?: () => void;
}

export function SidebarToggle({ isOpen, setIsOpen }: SidebarToggleProps) {
	return (
		<div className="invisible lg:visible absolute top-[12px] -right-[10px] z-20">
			<Button
				onClick={() => setIsOpen?.()}
				className="rounded-full w-5 h-8"
				variant="outline"
				size="icon"
			>
				<ChevronLeft
					className={cn(
						"h-[14px] w-[14px] transition-transform duration-300",
						isOpen === false ? "rotate-180" : "rotate-0"
					)}
				/>
			</Button>
		</div>
	);
}
