import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--gutter);
`;

export const Section = styled.section`
  padding: clamp(64px, 10vw, 112px) 0;
  border-top: 1px solid var(--border);
`;

export const Eyebrow = styled.p`
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 12px;
`;

export const SectionTitle = styled.h2`
  font-family: var(--font-display);
  font-weight: 500;
  font-size: clamp(2rem, 4.5vw, 2.75rem);
  line-height: 1.15;
  letter-spacing: -0.01em;
`;

export const SectionHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px 24px;
  margin-bottom: clamp(32px, 5vw, 48px);
`;

const buttonBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 48px;
  padding: 0 22px;
  border-radius: 999px;
  font-size: 0.9375rem;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  border: 1px solid transparent;
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease,
    transform 0.2s ease;

  &:active {
    transform: translateY(1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const variants = {
  primary: css`
    background: var(--accent);
    color: var(--on-accent);
    &:hover {
      background: var(--accent-hover);
    }
  `,
  secondary: css`
    background: transparent;
    color: var(--text);
    border-color: var(--border);
    &:hover {
      border-color: var(--text);
    }
  `,
  ghost: css`
    background: transparent;
    color: var(--accent);
    padding: 0 4px;
    min-height: 44px;
    &:hover {
      color: var(--accent-hover);
      text-decoration: underline;
      text-underline-offset: 4px;
    }
  `,
};

// Uso: <Button $variant="secondary" />, <Button as="a" href="..." /> o <Button as={Link} to="..." />
export const Button = styled.button`
  ${buttonBase}
  ${({ $variant = "primary" }) => variants[$variant]}
`;

export const Tag = styled.li`
  list-style: none;
  font-size: 0.8125rem;
  font-weight: 500;
  line-height: 1;
  padding: 6px 10px;
  border-radius: 999px;
  background: var(--surface-2);
  color: var(--muted);
`;
