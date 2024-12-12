import styled from 'styled-components'

export const HeroSection = styled.section`
  background-image: url(https://cdn.pixabay.com/photo/2020/01/26/20/14/computer-4795762_1280.jpg);
  background-size: cover;
  background-position: center;
  padding: 60px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  color: ${({ theme }) => theme.colors.text.secondary};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 0;
  }

  h1 {
    font-size: 3rem;
    margin: 0;
    z-index: 1;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    color: ${({ theme }) => theme.colors.text.secondary};

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.5rem;
    margin: 20px 0;
    z-index: 1;
    max-width: 600px;
    color: ${({ theme }) => theme.colors.text.secondary};

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  .cta-button {
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 15px 30px;
    font-size: 1.2rem;
    z-index: 1;
    color: ${({ theme }) => theme.colors.text.secondary};
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius};
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryHover};
    }

    &:active {
      background-color: ${({ theme }) => theme.colors.accent};
      transform: translateY(2px);
    }

    @media (max-width: 768px) {
      font-size: 1rem;
      padding: 12px 24px;
    }
  }
`
