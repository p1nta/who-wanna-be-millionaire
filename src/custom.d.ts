declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

interface IQuestion {
  question: string;
  correct: string;
  answers: string[];
  id: string;
}

type TIconProps = React.HTMLAttributes<SVGElement>;
