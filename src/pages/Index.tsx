
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Quiz App</h1>
        <p className="text-xl text-muted-foreground mb-8">Test your knowledge with our beautiful quiz interface!</p>
        <Button onClick={() => navigate('/quiz')} size="lg">
          Start Quiz
        </Button>
      </div>
    </div>
  );
};

export default Index;
