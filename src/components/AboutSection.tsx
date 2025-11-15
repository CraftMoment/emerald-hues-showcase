import { motion } from "framer-motion";
import { ParallaxSection } from "./ParallaxSection";
import { Target, Users, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const stats = [
  { icon: Target, label: "Projects Completed", value: "150+" },
  { icon: Users, label: "Happy Clients", value: "200+" },
  { icon: TrendingUp, label: "Growth Rate", value: "95%" },
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
              About <span className="text-primary">EcoTech</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Leading the way in sustainable technology solutions since 2020
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
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe in the power of technology to create positive environmental impact. Our team
              of dedicated professionals works tirelessly to develop innovative solutions that not
              only meet business needs but also contribute to a sustainable future for our planet.
            </p>
          </motion.div>
        </ParallaxSection>
      </div>
    </section>
  );
}
