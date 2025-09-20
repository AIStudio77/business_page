import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X, Check } from 'lucide-react';
import { useStores, useStoreState } from '../providers/AppProviders';

export default function ContentDisplay() {
  const { contentStore } = useStores();
  const contentState = useStoreState(contentStore);

  if (!contentState.activeContent) return null;

  const contentItem = contentStore.getContentItem(contentState.activeContent);
  if (!contentItem) return null;

  const handleClose = () => {
    contentStore.propose({ type: 'HIDE_CONTENT' });
  };

  const renderContent = () => {
    switch (contentItem.type) {
      case 'list':
        return (
          <ul className="space-y-3">
            {contentItem.data?.map((item: string, index: number) => (
              <li key={index} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        );
        
      case 'grid':
        return (
          <div className="grid gap-6 md:grid-cols-3">
            {contentItem.data?.map((item: any, index: number) => (
              <Card key={index} className="p-6 hover-elevate">
                <h4 className="text-lg font-semibold text-foreground mb-2">{item.name}</h4>
                <p className="text-2xl font-bold text-primary mb-4">{item.price}</p>
                <ul className="space-y-2">
                  {item.features?.map((feature: string, fIndex: number) => (
                    <li key={fIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        );
        
      default:
        return (
          <p className="text-foreground leading-relaxed text-lg">
            {contentItem.content}
          </p>
        );
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="max-w-4xl w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-display font-bold text-foreground">
              {contentItem.title}
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClose}
              data-testid="content-close"
              className="hover-elevate"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          
          <div className="space-y-6">
            {renderContent()}
          </div>
          
          <div className="flex justify-end mt-8">
            <Button 
              onClick={handleClose}
              data-testid="content-close-button"
              className="hover-elevate active-elevate-2"
            >
              Close
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}