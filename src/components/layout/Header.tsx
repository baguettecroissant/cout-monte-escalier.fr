"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, FileText } from "lucide-react";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
            <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-slate-900 tracking-tight">
                        Cout-Monte-Escalier<span className="text-orange-600">.fr</span>
                    </span>
                </Link>

                {/* Desktop Navigation / Call to Action */}
                <div className="flex items-center gap-6">


                    <Link href="/devis">
                        <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-sm md:text-lg px-4 md:px-8 h-10 md:h-12 shadow-md hover:shadow-lg transition-all rounded-full">
                            <FileText className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                            Devis Gratuit
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
