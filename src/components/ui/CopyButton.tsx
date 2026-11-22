'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './CopyButton.module.scss';

interface CopyButtonProps {
  value: string;
  label: string;
}

type CopyStatus = 'idle' | 'copied' | 'error';

const STATUS_MESSAGES: Record<CopyStatus, string> = {
  idle: '',
  copied: 'Copied to clipboard',
  error: 'Copy failed. Select the text and copy it manually.',
};

export function CopyButton({ value, label }: CopyButtonProps) {
  const [status, setStatus] = useState<CopyStatus>('idle');
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setStatus('copied');
    } catch {
      setStatus('error');
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus('idle'), 2500);
  }

  return (
    <>
      <button type="button" className={styles.button} onClick={handleCopy}>
        {status === 'copied' ? 'Copied' : label}
      </button>
      <span role="status" className={styles.status}>
        {STATUS_MESSAGES[status]}
      </span>
    </>
  );
}
