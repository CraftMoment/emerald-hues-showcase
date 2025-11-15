import { Code2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              mitrakerjaku.id
            </span>
          </div>
          
          <p className="text-muted-foreground text-center text-sm md:text-base">
            © 2024 mitrakerjaku.id. Mitra digital tanpa ribet.
          </p>
          
          <div className="flex gap-4 md:gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privasi</a>
            <a href="#" className="hover:text-primary transition-colors">Syarat</a>
            <a href="#" className="hover:text-primary transition-colors">Kontak</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
