import { Accordion } from '@/patterns/compoundComponentsPattern/components/Accordion.tsx';

export const CompoundComponents = () => {
  return (
    <div>
      <div>
        <b>Compound Components Pattern</b>
        <p>
          The Compound Components Pattern is a React design pattern that allows you to create
          components that work together as a family — sharing logic and context — while giving users
          a declarative and flexible API.
        </p>
      </div>
      <div>
        <Accordion>
          <Accordion.Item index={0}>
            <Accordion.Header>What is React?</Accordion.Header>
            <Accordion.Content>
              React is a JavaScript library for building user interfaces.
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item index={1}>
            <Accordion.Header>What is Compound Components?</Accordion.Header>
            <Accordion.Content>
              It’s a pattern where components share logic through React context.
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item index={2}>
            <Accordion.Header>Why use it?</Accordion.Header>
            <Accordion.Content>
              It keeps your components modular, readable, and easy to extend.
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};
