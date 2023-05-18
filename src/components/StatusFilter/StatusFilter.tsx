
import { Button } from '../Button/Button';
import css from './StatusFilter.module.css';

export const StatusFilter = () => {
  
  return (
    <div className={css.wrapper}>
      <Button
       selected={false}
      >
        All
      </Button>
      <Button
        selected={false}
      
      >
        Active
      </Button>
      <Button
        selected={false}
      >
        Completed
      </Button>
    </div>
  );
};
