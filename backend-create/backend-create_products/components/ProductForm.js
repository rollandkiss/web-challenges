// IMPORTS
import styled from "styled-components";
import StyledButton from "@/components/Button";
import { mutate } from "swr";

export default function ProductForm() {
  async function handleSubmit(event) {
    // Verhindert Standardverhalten von Submission und reload der HTML Seite
    event.preventDefault();

    // Lesen der Formulardaten
    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    // Data Fetch für interne API: "/api/products" mit übergabe der POST-relevanten Objektinhalte
    const response = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    });

    // Vorgang des Response schreibens "erfolgreich" lässt mittels "mutate"-methode von "swr" die Seite refresh'n
    if (response.ok) {
      mutate("/api/products");
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledHeading>Add a new Fish</StyledHeading>
      <StyledLabel htmlFor="name">
        Name:
        <input type="text" id="name" name="name" />
      </StyledLabel>
      <StyledLabel htmlFor="description">
        Description:
        <input type="text" id="description" name="description" />
      </StyledLabel>
      <StyledLabel htmlFor="price">
        Price:
        <input type="number" id="price" name="price" min="0" />
      </StyledLabel>
      <StyledLabel htmlFor="currency">
        Currency:
        <select id="currency" name="currency">
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
        </select>
      </StyledLabel>
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
}

// EXPORTS
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StyledHeading = styled.h2`
  text-align: center;
  color: var(--color-nemo);
`;

export const StyledLabel = styled.label`
  display: flex;
  justify-content: space-between;
  gap: 5px;
`;
