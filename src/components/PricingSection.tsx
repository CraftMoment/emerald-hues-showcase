import { motion } from "framer-motion";
import { ParallaxSection } from "./ParallaxSection";
import { Check, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const packageTypes = [
  {
    id: "landing",
    label: "Landing Page",
    plans: [
      {
        name: "Starter",
        price: "1.500.000",
        description: "Landing page simpel untuk online presence",
        features: [
          "Free Domain (.com)",
          "Shared Hosting (6 Bulan)",
          "Desain Responsif (Mobile & Desktop)",
          "1 Halaman Landing Page (scroll panjang)",
          "1 Email Bisnis",
          "1 GB Disk Storage",
          "1x Revisi Gratis",
          "Free SSL",
          "Form Kontak Langsung ke WhatsApp",
          "Garansi Maintenance 15 Hari",
          "Video Panduan Akses Website",
        ],
        popular: false,
      },
      {
        name: "Growth",
        price: "2.750.000",
        description: "Landing page dengan kontrol lebih dan fitur interaktif",
        features: [
          "Semua yang ada di Starter, plus:",
          "Hosting 1 Tahun",
          "Desain Visual Lebih Kompleks (CTA, Form, Galeri)",
          "Direct WhatsApp Chat",
          "2 Email Bisnis",
          "10 GB Disk Storage",
          "3x Revisi Gratis",
          "Free SSL",
          "SEO On-Page Basic",
          "Garansi Maintenance 1 Bulan",
        ],
        popular: true,
      },
      {
        name: "Ultimate",
        price: "3.750.000",
        description: "Landing page all-in-one untuk konversi maksimal",
        features: [
          "Semua yang ada di Growth, plus:",
          "Up to 2 Halaman Tambahan (About / FAQ / Blog Preview)",
          "Request Fitur Khusus (Popup, Accordion, Pricing Table, dll)",
          "Desain Interaktif (Animated Scroll, Parallax, dll)",
          "Speed Optimization (Lazy Load + Caching Tools)",
          "5x Revisi Gratis",
          "Garansi Maintenance 1,5 Bulan",
        ],
        popular: false,
      },
    ],
  },
  {
    id: "company",
    label: "Web Company Profile",
    plans: [
      {
        name: "Starter",
        price: "2.500.000",
        description: "Company profile untuk bisnis yang baru go digital",
        features: [
          "Free Domain (.com)",
          "Shared Hosting (6 Bulan)",
          "Desain Responsif (Mobile & Desktop)",
          "3 Halaman Utama (Home, About, Contact)",
          "1 Email Bisnis",
          "2 GB Disk Storage",
          "2x Revisi Gratis",
          "Free SSL",
          "Form Kontak Langsung ke WhatsApp",
          "Garansi Maintenance 15 Hari",
          "Video Panduan Akses Website",
        ],
        popular: false,
      },
      {
        name: "Growth",
        price: "4.000.000",
        description: "Company profile profesional lengkap",
        features: [
          "Semua yang ada di Starter, plus:",
          "Hosting 1 Tahun",
          "5-6 Halaman (Home, About, Services, Portfolio/Clients, Contact, FAQ)",
          "2 Email Bisnis",
          "Desain Premium dan Clean",
          "10 GB Disk Storage",
          "Galeri Foto / Testimoni",
          "SEO On-Page Dasar (Meta, ALT, Struktur Heading)",
          "2x Revisi Gratis",
          "Garansi Maintenance 1 Bulan",
        ],
        popular: true,
      },
      {
        name: "Executive",
        price: "6.500.000",
        description: "Company profile premium untuk perusahaan besar",
        features: [
          "Semua yang ada di Growth, plus:",
          "8-10 Halaman (termasuk Career, Blog, atau Request Khusus)",
          "Request Fitur Tambahan (Popup, Accordion, Pricing Table, dll)",
          "Integrasi Instagram Feed / YouTube Embed",
          "Speed Optimization (Lazy Load + Caching Tools)",
          "Desain Interaktif (Parallax, Scroll Animasi)",
          "3 Email Bisnis",
          "5x Revisi Gratis",
          "Garansi Maintenance 1,5 Bulan",
        ],
        popular: false,
      },
    ],
  },
  {
    id: "travel",
    label: "Web Travel & Tour",
    plans: [
      {
        name: "Starter",
        price: "2.500.000",
        description: "Website travel untuk agen tour pemula",
        features: [
          "Free Domain (.com)",
          "Shared Hosting (6 Bulan)",
          "Desain Responsif (Mobile & Desktop)",
          "1 Halaman Landing Page (scroll panjang)",
          "1 Email Bisnis",
          "2 GB Disk Storage",
          "2x Revisi Gratis",
          "Free SSL",
          "CTA 'Booking via WhatsApp' per paket",
          "Section Detail untuk Tour Packages",
          "Harga / Durasi Paket",
          "Garansi Maintenance 15 Hari",
          "Video Panduan Akses Website",
        ],
        popular: false,
      },
      {
        name: "Growth",
        price: "5.000.000",
        description: "Website travel profesional dengan halaman paket lengkap",
        features: [
          "Semua yang ada di Starter, plus:",
          "Hosting 1 Tahun",
          "5-7 Halaman Utama (Home, About Us, Tour Packages, Gallery, Blog, Contact, Testimonial)",
          "Page individual untuk Setiap Paket",
          "Fitur Search / Filter Paket Tour",
          "Galeri Foto Tiap Paket",
          "CTA WhatsApp di setiap halaman paket",
          "SEO On-Page Basic (meta title, slug, heading structure)",
          "2 Email Bisnis",
          "10 GB Disk Storage",
          "3x Revisi Gratis",
          "Garansi Maintenance 1 Bulan",
        ],
        popular: true,
      },
      {
        name: "Ultimate",
        price: "12.000.000",
        description: "Website travel full-fitur dengan sistem booking otomatis",
        features: [
          "Semua yang ada di Growth, plus:",
          "Integrasi Payment Gateway (Midtrans / Tripay / Xendit / Stripe)",
          "Tombol 'Book & Bayar Sekarang' di setiap halaman paket",
          "Form Booking Otomatis (Nama, Jadwal, Jumlah Orang, dll)",
          "Email Notifikasi Otomatis (ke admin & customer)",
          "Fitur Kalender Jadwal Ketersediaan (optional)",
          "Desain Interaktif (Parallax, Scroll Animasi)",
          "Speed Optimization",
          "3 Email Bisnis",
          "5x Revisi Gratis",
          "Garansi Maintenance 1,5 Bulan",
        ],
        popular: false,
      },
    ],
  },
  {
    id: "toko",
    label: "Web Toko Online",
    plans: [
      {
        name: "Starter",
        price: "2.500.000",
        description: "Toko online sederhana untuk UMKM",
        features: [
          "Free Domain (.com)",
          "Shared Hosting (6 Bulan)",
          "Desain Responsif (Mobile & Desktop)",
          "Katalog Produk Dinamis (20-100 produk)",
          "1 Email Bisnis",
          "2 GB Disk Storage",
          "Tombol Beli Sekarang → Direct ke WhatsApp",
          "Section Testimoni / FAQ / Promo",
          "Garansi Maintenance 15 Hari",
          "Video Panduan Akses Website",
        ],
        popular: false,
      },
      {
        name: "Growth",
        price: "6.000.000",
        description: "Toko online profesional dengan catalog management",
        features: [
          "Semua yang ada di Starter, plus:",
          "Hosting 1 Tahun",
          "5-7 Halaman (Home, Shop, About Us, Contact, FAQ, Testimonial, Promo)",
          "Katalog Produk Dinamis (20-100 produk)",
          "Fitur Search / Filter Paket Tour",
          "Tombol 'Tambah ke Keranjang' → Checkout via WhatsApp",
          "Desain Custom Kategori Produk",
          "SEO On-Page Basic (meta title, slug, heading structure)",
          "2 Email Bisnis",
          "10 GB Disk Storage",
          "3x Revisi Gratis",
          "Garansi Maintenance 1 Bulan",
        ],
        popular: true,
      },
      {
        name: "Ultimate",
        price: "12.000.000",
        description: "Toko online full system dengan payment gateway",
        features: [
          "Semua yang ada di Growth, plus:",
          "Sistem Keranjang Belanja Otomatis",
          "Integrasi Payment Gateway (Midtrans / Tripay / Xendit / Stripe)",
          "Metode Pembayaran: Transfer, QRIS, e-Wallet, Credit Card",
          "Dashboard Admin (Order, Produk, Stok, Diskon, User, dll)",
          "Checkout Otomatis + Email Notifikasi",
          "Ongkir Otomatis (via plugin/api dari jasa expedisi)",
          "Mobile Friendly Cart Experience",
          "Speed Optimization",
          "3 Email Bisnis",
          "5x Revisi Gratis",
          "Garansi Maintenance 1,5 Bulan",
        ],
        popular: false,
      },
    ],
  },
  {
    id: "seo",
    label: "Optimasi SEO",
    plans: [
      {
        name: "Starter",
        price: "2.000.000",
        description: "SEO dasar untuk website baru",
        features: [
          "Audit SEO Dasar",
          "Riset Keyword Lokal (5 keyword utama)",
          "Optimasi Meta Title & Meta Description",
          "Optimasi Struktur Heading (H1, H2, H3)",
          "Optimasi ALT Text Gambar",
          "Setup Google Search Console",
          "Setup Google Analytics",
          "4 Artikel SEO Friendly",
          "Report Bulanan",
        ],
        popular: false,
      },
      {
        name: "Growth",
        price: "3.500.000",
        description: "SEO lengkap untuk meningkatkan traffic organik",
        features: [
          "Semua yang ada di Starter, plus:",
          "Riset Keyword Lokal (15-20 keyword utama)",
          "Optimasi Konten 3 Halaman (Home, Product, FAQ, About)",
          "Optimasi Kecepatan Website (speed up GTMetrix / Pagespeed)",
          "8 Artikel SEO Friendly",
        ],
        popular: true,
      },
      {
        name: "Ultimate",
        price: "4.500.000",
        description: "SEO maksimal untuk dominasi pencarian Google",
        features: [
          "Semua yang ada di Growth, plus:",
          "Optimasi 5-7 Halaman (termasuk produk/kategori)",
          "20 Artikel SEO Friendly",
        ],
        popular: false,
      },
    ],
  },
];

export function PricingSection() {
  const [selectedPackage, setSelectedPackage] = useState("company");

  const currentPlans = packageTypes.find((pkg) => pkg.id === selectedPackage)?.plans || [];

  return (
    <section id="pricelist" className="py-24 bg-gradient-section">
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
              Pricelist <span className="text-primary">Layanan</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Solusi lengkap untuk bantu bisnis Anda eksis di dunia digital!
            </p>
          </motion.div>
        </ParallaxSection>

        {/* Package Type Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {packageTypes.map((pkg) => (
            <Button
              key={pkg.id}
              variant={selectedPackage === pkg.id ? "default" : "outline"}
              onClick={() => setSelectedPackage(pkg.id)}
              className="transition-all duration-300"
            >
              {pkg.label}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {currentPlans.map((plan, index) => (
            <ParallaxSection key={plan.name} offset={20 + index * 5}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="h-full"
              >
                <Card
                  className={`p-8 h-full flex flex-col relative transition-all duration-300 ${
                    plan.popular
                      ? "border-primary border-2 shadow-elegant scale-105"
                      : "border-2 hover:border-primary/50 hover:shadow-elegant"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full flex items-center gap-1 text-sm font-bold">
                        <Star className="h-4 w-4 fill-current" />
                        Terpopuler
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="mb-3">
                      <span className="text-sm text-muted-foreground">Rp</span>
                      <span className="text-4xl font-bold text-primary ml-1">
                        {plan.price.split(".")[0]}
                      </span>
                      <span className="text-2xl font-bold text-primary">
                        .{plan.price.split(".")[1]}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground italic">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                    onClick={() => {
                      const packageLabel = packageTypes.find(p => p.id === selectedPackage)?.label || "";
                      const message = `Halo, saya ingin order paket ${plan.name} untuk ${packageLabel} dengan harga Rp ${plan.price}`;
                      window.open(`https://wa.me/6283838812841?text=${encodeURIComponent(message)}`, '_blank');
                    }}
                  >
                    Order Sekarang
                  </Button>
                </Card>
              </motion.div>
            </ParallaxSection>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12 space-y-4"
        >
          <p className="text-muted-foreground italic">
            *Harga dapat disesuaikan berdasarkan kebutuhan spesifik proyek Anda
          </p>
          <div className="pt-4">
            <Button 
              size="lg" 
              variant="outline" 
              className="group"
              onClick={() => {
                const message = "Halo, saya ingin tanya harga khusus / custom package untuk kebutuhan saya";
                window.open(`https://wa.me/6283838812841?text=${encodeURIComponent(message)}`, '_blank');
              }}
            >
              💬 Tanya Harga Khusus / Custom Package
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
