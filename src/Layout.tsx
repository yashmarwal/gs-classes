import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Head } from "vite-react-ssg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CallButton from "@/components/CallButton";
import BackToTop from "@/components/BackToTop";
import ScrollProgress from "@/components/ScrollProgress";
import MobileActionBar from "@/components/MobileActionBar";
import DemoPopup from "@/components/DemoPopup";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";

const queryClient = new QueryClient();

const Layout = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Head>
        <script type="application/ld+json">{JSON.stringify(organizationJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteJsonLd)}</script>
      </Head>
      <Toaster />
      <Sonner />
      <ScrollProgress />
      <Header />
      <div className="pb-20 md:pb-0">
        <Outlet />
        <Footer />
      </div>
      <WhatsAppButton />
      <CallButton />
      <BackToTop />
      <MobileActionBar />
      <DemoPopup />
    </TooltipProvider>
  </QueryClientProvider>
);

export default Layout;
