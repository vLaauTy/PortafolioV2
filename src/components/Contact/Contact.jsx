import React from "react";
import styled, { keyframes } from "styled-components";
import { FiAlertCircle, FiCheckCircle, FiMail, FiSend } from "react-icons/fi";
import { usePreferencias } from "../../preferencias";
import { Button, Container, Eyebrow, Section, SectionTitle } from "../ui";
import Reveal from "../Reveal";
import SocialLinks from "../SocialLinks";
import { useContactForm } from "./useContactForm";

const Grid = styled(Container)`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr);
  gap: 40px clamp(32px, 6vw, 72px);

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const Intro = styled.p`
  color: var(--muted);
  font-size: 1.125rem;
  margin: 16px 0 28px;
  max-width: 44ch;
`;

const EmailLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-height: 44px;
  font-weight: 600;
  font-size: clamp(1rem, 2.4vw, 1.125rem);
  color: var(--text);
  text-decoration: underline;
  text-decoration-color: var(--border);
  text-underline-offset: 6px;
  word-break: break-all;
  margin-bottom: 20px;

  &:hover {
    text-decoration-color: var(--accent);
  }

  svg {
    flex: none;
    color: var(--accent);
  }
`;

const Form = styled.form`
  display: grid;
  gap: 20px;
  padding: clamp(20px, 4vw, 36px);
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
`;

const Field = styled.div`
  display: grid;
  gap: 8px;
`;

const Label = styled.label`
  font-weight: 600;
  font-size: 0.9375rem;
`;

const inputStyles = `
  width: 100%;
  padding: 12px 14px;
  min-height: 48px;
  font-size: 1rem; /* 16px evita el zoom automático en iOS */
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &::placeholder {
    color: var(--muted);
    opacity: 0.7;
  }

  &:hover {
    border-color: var(--muted);
  }

  &:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 0 3px var(--accent-soft);
  }

  &[aria-invalid="true"] {
    border-color: var(--danger);
  }
`;

const Input = styled.input`
  ${inputStyles}
`;

const TextArea = styled.textarea`
  ${inputStyles}
  min-height: 150px;
  resize: vertical;
`;

const ErrorText = styled.p`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.875rem;
  color: var(--danger);
`;

const Status = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  color: ${({ $tipo }) => ($tipo === "ok" ? "var(--success)" : "var(--danger)")};
`;

const Actions = styled.div`
  display: grid;
  gap: 12px;
`;

const spin = keyframes`to { transform: rotate(360deg); }`;

const Spinner = styled.span`
  width: 16px;
  height: 16px;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: ${spin} 0.7s linear infinite;
`;

const SubmitButton = styled(Button)`
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Contact = () => {
  const { t, perfil } = usePreferencias();
  const f = t.form;
  const { form, errores, estado, handleChange, handleBlur, handleSubmit } = useContactForm(perfil.email, f);
  const enviando = estado === "enviando";

  const campo = (name) => ({
    id: `contacto-${name}`,
    name,
    value: form[name],
    onChange: handleChange,
    onBlur: handleBlur,
    "aria-invalid": Boolean(errores[name]),
    "aria-describedby": errores[name] ? `contacto-${name}-error` : undefined,
  });

  const error = (name) =>
    errores[name] && (
      <ErrorText id={`contacto-${name}-error`}>
        <FiAlertCircle aria-hidden="true" /> {errores[name]}
      </ErrorText>
    );

  return (
    <Section id="contacto" aria-labelledby="contacto-title">
      <Grid>
        <Reveal>
          <Eyebrow>{t.nav.contacto}</Eyebrow>
          <SectionTitle id="contacto-title">{perfil.contacto.titulo}</SectionTitle>
          <Intro>{perfil.contacto.texto}</Intro>
          <EmailLink href={`mailto:${perfil.email}`}>
            <FiMail aria-hidden="true" /> {perfil.email}
          </EmailLink>
          <SocialLinks conEmail={false} />
        </Reveal>

        <Reveal delay={0.05}>
          <Form onSubmit={handleSubmit} noValidate>
            <Field>
              <Label htmlFor="contacto-nombre">{f.nombre}</Label>
              <Input {...campo("nombre")} autoComplete="name" placeholder={f.nombrePh} />
              {error("nombre")}
            </Field>
            <Field>
              <Label htmlFor="contacto-email">{f.email}</Label>
              <Input
                {...campo("email")}
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder={f.emailPh}
              />
              {error("email")}
            </Field>
            <Field>
              <Label htmlFor="contacto-mensaje">{f.mensaje}</Label>
              <TextArea {...campo("mensaje")} placeholder={f.mensajePh} />
              {error("mensaje")}
            </Field>
            <Actions>
              <div>
                <SubmitButton type="submit" disabled={enviando}>
                  {enviando ? <Spinner aria-hidden="true" /> : <FiSend aria-hidden="true" />}
                  {enviando ? f.enviando : f.enviar}
                </SubmitButton>
              </div>
              <Status role="status" $tipo={estado}>
                {estado === "ok" && (
                  <>
                    <FiCheckCircle aria-hidden="true" /> {f.ok}
                  </>
                )}
                {estado === "error" && (
                  <>
                    <FiAlertCircle aria-hidden="true" /> {f.error}
                  </>
                )}
              </Status>
            </Actions>
          </Form>
        </Reveal>
      </Grid>
    </Section>
  );
};

export default Contact;
