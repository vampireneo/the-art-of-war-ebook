import * as PrimitiveSwitch from '@radix-ui/react-switch';
import styles from './switch.module.css';

export const Switch = (props: PrimitiveSwitch.SwitchProps) => (
  <PrimitiveSwitch.Root {...props} className={styles.SwitchRoot}>
    <PrimitiveSwitch.Thumb className={styles.SwitchThumb} />
  </PrimitiveSwitch.Root>
);
