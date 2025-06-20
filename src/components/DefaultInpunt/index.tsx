import styles from './styles.module.css';

type DefaultInpuntProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<'input'>;
export function DefaultInput({
  id,
  type,
  labelText,
  ...rest
}: DefaultInpuntProps) {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input className={styles.input} id={id} type={type} {...rest} />
    </>
  );
}
