// app/loading.tsx
import { Sparkles } from "lucide-react";

export default function Loading() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
        <div className="flex items-center text-4xl font-bold text-primary mb-8">
          <img src="/finguide.png" alt="FinGuide" className="h-11 w-11" />
          FinGuide
        </div>
        
        <div className="relative">
          <div className="w-12 h-12 border-4 border-primary/20 rounded-full animate-spin border-t-primary"></div>
        </div>
  
        <div className="mt-4 text-muted-foreground text-lg animate-pulse">
          Loading your financial dashboard...
        </div>
  
        <div className="absolute bottom-8 flex space-x-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
        </div>
      </div>
    );
  }