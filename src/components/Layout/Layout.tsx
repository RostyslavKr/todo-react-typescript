import css from './Layout.module.css';

interface ILayoutProps {
  children: JSX.Element[],
}
export const Layout: React.FC<ILayoutProps> = ({children}) => {
  return <main className={css.container}>{children}</main>;
};
