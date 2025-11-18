import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, ChevronDown } from "lucide-react";
import { Question } from "@/data/questions";

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  onSelectAnswer: (answer: number) => void;
}

export const QuestionCard = ({
  question,
  selectedAnswer,
  onSelectAnswer,
}: QuestionCardProps) => {
  const [showExplanation, setShowExplanation] = useState(false);

  const isAnswered = selectedAnswer !== null;
  const isCorrect = selectedAnswer === question.correct_answer;

  const renderQuestionContent = () => {
    if (question.question_type === "text") {
      return <p className="text-lg leading-relaxed">{question.question}</p>;
    }

    return (
      <div className="terminal-block">
        <pre className="whitespace-pre-wrap break-words">
          <code>{question.question}</code>
        </pre>
      </div>
    );
  };

  return (
    <Card className="p-6 space-y-6 bg-card border-border">
      {/* Question Image (if exists) */}
      {question.image && (
        <div className="rounded-lg overflow-hidden border border-border">
          <img
            src={question.image}
            alt={`Question ${question.id}`}
            className="w-full h-auto"
          />
        </div>
      )}

      {/* Question Text */}
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <span className="text-primary font-bold text-lg shrink-0">
            Q{question.id}.
          </span>
          <div className="flex-1">{renderQuestionContent()}</div>
        </div>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrectAnswer = index === question.correct_answer;
          const showCorrect = isAnswered && isCorrectAnswer;
          const showWrong = isAnswered && isSelected && !isCorrect;

          let buttonClass = "justify-start h-auto py-3 px-4 text-left";

          if (showCorrect) {
            buttonClass += " bg-success/20 border-success text-success-foreground";
          } else if (showWrong) {
            buttonClass += " bg-destructive/20 border-destructive text-destructive-foreground";
          } else if (isSelected) {
            buttonClass += " bg-primary/10 border-primary";
          } else {
            buttonClass += " bg-muted/50 hover:bg-muted";
          }

          return (
            <Button
              key={index}
              variant="outline"
              className={buttonClass}
              onClick={() => !isAnswered && onSelectAnswer(index)}
              disabled={isAnswered}
            >
              <span className="flex items-center gap-3 w-full">
                <span className="font-bold text-base shrink-0">
                  {String.fromCharCode(65 + index)})
                </span>
                <span className="flex-1">{option}</span>
                {showCorrect && <Check className="w-5 h-5 shrink-0" />}
                {showWrong && <X className="w-5 h-5 shrink-0" />}
              </span>
            </Button>
          );
        })}
      </div>

      {/* Explanation Button */}
      {isAnswered && (
        <div className="space-y-4 pt-4 border-t border-border">
          <Button
            variant="secondary"
            onClick={() => setShowExplanation(!showExplanation)}
            className="w-full"
          >
            <span className="flex items-center gap-2">
              Explanation
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  showExplanation ? "rotate-180" : ""
                }`}
              />
            </span>
          </Button>

          {/* Explanation Content */}
          {showExplanation && (
            <div className="explanation-box">
              <div className="rtl arabic space-y-2">
                <ul>
                  {question.explanation.text_points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>

              {question.explanation.code_blocks &&
                question.explanation.code_blocks.length > 0 && (
                  <div className="mt-4 space-y-3">
                    {question.explanation.code_blocks.map((code, idx) => (
                      <div key={idx} className="terminal-block ltr">
                        <pre>
                          <code>{code}</code>
                        </pre>
                      </div>
                    ))}
                  </div>
                )}
            </div>
          )}
        </div>
      )}
    </Card>
  );
};
