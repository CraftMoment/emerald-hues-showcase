import { motion } from "framer-motion";
import { ParallaxSection } from "./ParallaxSection";
import { Code, Users, Laptop } from "lucide-react";
import { Card } from "@/components/ui/card";

const stats = [
  { icon: Code, label: "Proyek Selesai", value: "4" },
  { icon: Users, label: "Klien Puas", value: "2" },
  { icon: Laptop, label: "Tingkat Kepuasan", value: "100%" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-section">
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
              Tentang <span className="text-primary">mitrakerjaku.id</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Mitra transformasi digital terpercaya sejak 2020
            </p>
          </motion.div>
        </ParallaxSection>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <ParallaxSection key={stat.label} offset={20 + index * 10}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Card className="p-8 text-center hover:shadow-elegant transition-all duration-300 border-2 hover:border-primary/50">
                  <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </Card>
              </motion.div>
            </ParallaxSection>
          ))}
        </div>

        <ParallaxSection offset={40}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Kami percaya bahwa transformasi digital tidak harus rumit. Tim profesional kami
              bekerja untuk mengembangkan solusi inovatif yang tidak hanya memenuhi kebutuhan
              bisnis Anda, tetapi juga mudah digunakan dan memberikan hasil nyata. Dari website
              profesional hingga aplikasi bisnis yang kompleks, kami siap menjadi mitra
              terpercaya dalam perjalanan digital Anda.
            </p>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-3 text-primary">SEO-Optimized Solutions</h3>
              <p className="text-muted-foreground">
                Setiap website yang kami buat dioptimalkan untuk mesin pencari (SEO) agar bisnis Anda 
                mudah ditemukan online. Kami menerapkan best practices SEO termasuk struktur kode yang 
                clean, kecepatan loading optimal, mobile-friendly design, dan konten yang SEO-ready untuk 
                meningkatkan ranking dan visibility bisnis Anda di Google.
              </p>
            </div>
          </motion.div>
        </ParallaxSection>
      </div>
    </section>
  );
}
