import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { QuestionCard } from "@/components/QuestionCard";
import { questions } from "@/data/questions";
import { ChevronLeft, ChevronRight, Flag } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const navigate = useNavigate();

  // Load saved progress from localStorage
  useEffect(() => {
    const savedAnswers = localStorage.getItem("examAnswers");
    const savedQuestion = localStorage.getItem("currentQuestion");

    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
    if (savedQuestion) {
      setCurrentQuestion(parseInt(savedQuestion));
    }
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem("examAnswers", JSON.stringify(answers));
    localStorage.setItem("currentQuestion", currentQuestion.toString());
  }, [answers, currentQuestion]);

  const handleSelectAnswer = (answer: number) => {
    const newAnswers = { ...answers, [questions[currentQuestion].id]: answer };
    setAnswers(newAnswers);

    const isCorrect = answer === questions[currentQuestion].correct_answer;
    if (isCorrect) {
      toast.success("Correct answer!");
    } else {
      toast.error("Wrong answer. Check the explanation.");
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleFinish = () => {
    const unanswered = questions.filter(
      (q) => answers[q.id] === undefined
    ).length;

    if (unanswered > 0) {
      toast.error(`You have ${unanswered} unanswered questions!`);
      return;
    }

    // Clear localStorage and navigate to results
    localStorage.removeItem("examAnswers");
    localStorage.removeItem("currentQuestion");
    navigate("/results", { state: { answers } });
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];
  const isLastQuestion = currentQuestion === questions.length - 1;

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            ITI-Track Exam-4
          </h1>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>
                Question {currentQuestion + 1} / {questions.length}
              </span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>

        {/* Question Card */}
        <QuestionCard
          question={question}
          selectedAnswer={answers[question.id] ?? null}
          onSelectAnswer={handleSelectAnswer}
        />

        {/* Navigation */}
        <div className="flex items-center justify-between gap-4 pt-4">
          <Button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            variant="outline"
            size="lg"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Previous
          </Button>

          {isLastQuestion ? (
            <Button onClick={handleFinish} size="lg" variant="default">
              <Flag className="w-5 h-5 mr-2" />
              Finish Exam
            </Button>
          ) : (
            <Button onClick={handleNext} size="lg">
              Next
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          )}
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-muted-foreground pt-8">
          Made by: Eng/ Mohamed Khaled
        </footer>
      </div>
    </div>
  );
};

export default Index;
