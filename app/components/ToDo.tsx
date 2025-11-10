import { IClassProps } from './IClassName';
export interface NameProps {
  surName: string;
  lastName: string;
  age: number;
}

export default function TodoList({ surName, lastName, age, className }: NameProps & IClassProps) {
  const style = `${className}`;
  return (
    <div className={style}>
      <h1>
        {surName} {lastName} {age} Todos
      </h1>
      <ul className='list-disc'>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </div>
  );
}
