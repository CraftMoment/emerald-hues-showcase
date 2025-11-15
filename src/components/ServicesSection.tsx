import { motion } from "framer-motion";
import { ParallaxSection } from "./ParallaxSection";
import { Leaf, Zap, Recycle, Cloud } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Leaf,
    title: "Pembuatan Website",
    description: "Website profesional dan responsif yang memperkuat kehadiran digital bisnis Anda.",
  },
  {
    icon: Zap,
    title: "Aplikasi Bisnis",
    description: "Aplikasi custom yang dirancang khusus untuk mengoptimalkan proses bisnis Anda.",
  },
  {
    icon: Recycle,
    title: "Solusi Kerja Digital",
    description: "Sistem manajemen dan workflow digital yang meningkatkan produktivitas tim.",
  },
  {
    icon: Cloud,
    title: "Konsultasi IT",
    description: "Pendampingan strategis untuk transformasi digital dan implementasi teknologi.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <ParallaxSection offset={30}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Layanan <span className="text-primary">Kami</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Solusi digital lengkap untuk transformasi bisnis Anda
            </p>
          </motion.div>
        </ParallaxSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ParallaxSection key={service.title} offset={20 + index * 5}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="p-6 h-full hover:shadow-elegant transition-all duration-300 border-2 hover:border-primary/50 group">
                  <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </Card>
              </motion.div>
            </ParallaxSection>
          ))}
        </div>
      </div>
    </section>
  );
}
