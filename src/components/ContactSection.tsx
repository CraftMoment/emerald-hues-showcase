import { motion } from "framer-motion";
import { ParallaxSection } from "./ParallaxSection";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@mitrakerjaku.id" },
  { icon: Phone, label: "Telepon", value: "+62 812-3456-7890" },
  { icon: MapPin, label: "Alamat", value: "Jakarta, Indonesia" },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gradient-section">
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
              Hubungi <span className="text-primary">Kami</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Siap memulai transformasi digital? Mari berbicara!
            </p>
          </motion.div>
        </ParallaxSection>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <ParallaxSection offset={40}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-8 border-2">
                <h3 className="text-2xl font-bold mb-6">Kirim Pesan</h3>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Nama Anda" className="h-12" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email Anda" className="h-12" />
                  </div>
                  <div>
                    <Textarea placeholder="Pesan Anda" rows={5} />
                  </div>
                  <Button size="lg" className="w-full shadow-elegant hover:shadow-glow transition-all duration-300">
                    Kirim Pesan
                  </Button>
                </form>
              </Card>
            </motion.div>
          </ParallaxSection>

          <ParallaxSection offset={40}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className="p-6 border-2 hover:border-primary/50 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-primary/10">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                        <p className="font-semibold">{info.value}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="pt-6"
              >
                <h4 className="font-bold mb-4">Ikuti Kami</h4>
                <div className="flex gap-4">
                  {["Twitter", "LinkedIn", "Instagram"].map((social) => (
                    <Button key={social} variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                      {social}
                    </Button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </ParallaxSection>
        </div>
      </div>
    </section>
  );
}
