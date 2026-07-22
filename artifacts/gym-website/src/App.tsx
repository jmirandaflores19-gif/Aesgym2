import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import SucursalesPage from '@/pages/SucursalesPage';
import SucursalDetailPage from '@/pages/SucursalDetailPage';
import { Route, Switch, Router as WouterRouter, Redirect } from 'wouter';

import IntroAnimation from '@/components/IntroAnimation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/">
        <Redirect to="/sucursales" />
      </Route>
      <Route path="/sucursales" component={SucursalesPage} />
      <Route path="/sucursales/:id" component={SucursalDetailPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <div className="bg-background min-h-[100dvh] text-foreground overflow-x-hidden selection:bg-primary selection:text-black">
            <IntroAnimation />
            <Navbar />
            <main className="pt-20">
              <Router />
            </main>
            <Footer />
            <FloatingWhatsApp />
          </div>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;