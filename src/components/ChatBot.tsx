import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm here to help you with information about our photography services and packages. How can I assist you today?",
      sender: 'bot',
    },
  ]);
  const [input, setInput] = useState('');

  const quickReplies = [
    'Tell me about your packages',
    'What services do you offer?',
    'How do I book a session?',
    'What areas do you cover?',
  ];

  const getResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();

    if (msg.includes('package') || msg.includes('pricing') || msg.includes('price')) {
      return "We offer three main packages:\n\n📷 Basic Package - Perfect for intimate celebrations\n📷 Standard Package - Our most popular choice with extended coverage\n📷 Premium Package - Complete wedding day coverage with all the extras\n\nWould you like to know more details about any specific package?";
    } else if (msg.includes('service') || msg.includes('what do you')) {
      return "We specialize in:\n\n✨ Wedding Photography & Videography\n✨ Pre-wedding & Engagement Shoots\n✨ Traditional Ceremony Coverage\n✨ Reception Photography\n✨ Portrait Photography\n✨ Event Coverage\n\nAll our packages include professional editing and online gallery delivery!";
    } else if (msg.includes('book') || msg.includes('contact') || msg.includes('schedule')) {
      return "To book a session:\n\n1. Visit our Contact page\n2. Fill out the booking form\n3. Or call us directly at +91 83359 34679\n4. Or WhatsApp us using the button below\n\nWe'll get back to you within 24 hours to discuss your requirements!";
    } else if (msg.includes('area') || msg.includes('location') || msg.includes('where')) {
      return "We're based in Kolkata and cover:\n\n📍 West Bengal (Kolkata, Durgapur, Burdwan, Asansol)\n📍 Delhi NCR\n📍 Mumbai\n📍 Goa\n📍 Uttar Pradesh (Varanasi and more)\n\nWe're also happy to travel to your destination wedding location!";
    } else if (msg.includes('hi') || msg.includes('hello') || msg.includes('hey')) {
      return "Hello! I'm here to help you with information about Gift of Memories photography services. What would you like to know?";
    } else if (msg.includes('thank')) {
      return "You're welcome! Feel free to ask if you have any other questions. We're here to help make your special day unforgettable!";
    } else {
      return "I'd be happy to help with that! For detailed information, you can:\n\n• Check our Packages page for pricing details\n• Visit our Gallery to see our work\n• Contact us directly for custom requirements\n\nIs there anything specific you'd like to know about our photography services?";
    }
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getResponse(input),
        sender: 'bot',
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 500);
  };

  const handleQuickReply = (reply: string) => {
    setInput(reply);
    handleSend();
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-24 right-6 z-50 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Open chat"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-background border border-border rounded-lg shadow-2xl animate-scale-in">
          <div className="bg-primary text-primary-foreground p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-5 w-5" />
              <span className="font-semibold">Gift of Memories</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-primary-foreground/20 rounded-full p-1 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <ScrollArea className="h-96 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 whitespace-pre-line ${
                      message.sender === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-foreground'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}

              {messages.length === 1 && (
                <div className="space-y-2 mt-4">
                  <p className="text-xs text-muted-foreground">Quick questions:</p>
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className="block w-full text-left text-sm bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-lg p-2 transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </ScrollArea>

          <div className="p-4 border-t border-border">
            <div className="flex space-x-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button onClick={handleSend} size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
