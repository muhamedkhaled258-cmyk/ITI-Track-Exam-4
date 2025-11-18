import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { questions } from "@/data/questions";
import { QuestionCard } from "@/components/QuestionCard";
import { Trophy, RotateCcw, Eye } from "lucide-react";
import { useState } from "react";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const answers = location.state?.answers || {};
  const [showReview, setShowReview] = useState(false);

  const totalQuestions = questions.length;
  const correctAnswers = Object.keys(answers).filter(
    (key) => answers[key] === questions[parseInt(key) - 1].correct_answer
  ).length;
  const percentage = ((correctAnswers / totalQuestions) * 100).toFixed(1);

  const getEvaluation = () => {
    const score = parseFloat(percentage);
    if (score >= 90) return { text: "Excellent", color: "text-secondary" };
    if (score >= 75) return { text: "Very Good", color: "text-primary" };
    if (score >= 50) return { text: "Average", color: "text-accent" };
    return { text: "Needs Improvement", color: "text-destructive" };
  };

  const evaluation = getEvaluation();

  const restartExam = () => {
    navigate("/", { replace: true });
  };

  if (showReview) {
    return (
      <div className="min-h-screen bg-background py-8 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Review All Answers</h1>
            <Button onClick={() => setShowReview(false)} variant="outline">
              <Eye className="w-4 h-4 mr-2" />
              Back to Results
            </Button>
          </div>

          {questions.map((question) => (
            <QuestionCard
              key={question.id}
              question={question}
              selectedAnswer={answers[question.id] ?? null}
              onSelectAnswer={() => {}}
            />
          ))}

          <div className="flex justify-center pt-8">
            <Button onClick={restartExam} size="lg">
              <RotateCcw className="w-5 h-5 mr-2" />
              Restart Exam
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4">
      <Card className="max-w-2xl w-full p-8 space-y-8 bg-card border-border">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 border-2 border-primary">
            <Trophy className="w-12 h-12 text-primary" />
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl font-bold">Exam Completed!</h1>
            <p className="text-muted-foreground text-lg">
              ITI-Track Exam-4 Results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground uppercase tracking-wide">
                Score
              </p>
              <p className="text-3xl font-bold text-primary">
                {correctAnswers}/{totalQuestions}
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground uppercase tracking-wide">
                Percentage
              </p>
              <p className="text-3xl font-bold text-secondary">{percentage}%</p>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground uppercase tracking-wide">
                Evaluation
              </p>
              <p className={`text-3xl font-bold ${evaluation.color}`}>
                {evaluation.text}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <Button
              onClick={() => setShowReview(true)}
              size="lg"
              variant="secondary"
              className="flex-1"
            >
              <Eye className="w-5 h-5 mr-2" />
              View All Answers
            </Button>
            <Button onClick={restartExam} size="lg" className="flex-1">
              <RotateCcw className="w-5 h-5 mr-2" />
              Restart Exam
            </Button>
          </div>
        </div>
      </Card>

      <footer className="fixed bottom-4 left-0 right-0 text-center text-sm text-muted-foreground">
        Made by: Eng/ Mohamed Khaled
      </footer>
    </div>
  );
};

export default Results;
