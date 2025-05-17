
'use server';
/**
 * @fileOverview An AI agent to assist users in composing initial WhatsApp messages.
 *
 * - generateInitialMessage - A function that generates an initial WhatsApp message.
 * - GenerateInitialMessageInput - The input type for the generateInitialMessage function.
 * - GenerateInitialMessageOutput - The return type for the generateInitialMessage function.
 */

import {ai} from '@/ai/genkit';
import { z } from 'zod'; 

const GenerateInitialMessageInputSchema = z.object({
  topic: z.string().describe('The topic or reason for contacting support.'),
});
// export type GenerateInitialMessageInput = z.infer<typeof GenerateInitialMessageInputSchema>; // Type export removed for JS

const GenerateInitialMessageOutputSchema = z.object({
  message: z.string().describe('The AI-generated initial message for WhatsApp.'),
});
// export type GenerateInitialMessageOutput = z.infer<typeof GenerateInitialMessageOutputSchema>; // Type export removed for JS


export const generateInitialMessage = async (input) => {
  return generateInitialMessageFlow(input);
};

const prompt = ai.definePrompt({
  name: 'generateInitialMessagePrompt',
  input: {schema: GenerateInitialMessageInputSchema},
  output: {schema: GenerateInitialMessageOutputSchema},
  prompt: `You are a helpful AI assistant that helps users compose initial messages for WhatsApp support.
  The user wants to contact support regarding the following topic: {{{topic}}}.
  Generate a concise and professional initial message that the user can send to the support team.
  The message should be no more than two sentences.
  Start with a greeting.
  `,
});

const generateInitialMessageFlow = ai.defineFlow(
  {
    name: 'generateInitialMessageFlow',
    inputSchema: GenerateInitialMessageInputSchema,
    outputSchema: GenerateInitialMessageOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output; // In Genkit 1.x, output is the direct value, not output()
  }
);

// Type exports are not standard in JS, so if needed for external JS consumption,
// they would typically be documented or handled differently (e.g., JSDoc for schema shape).
// For this conversion, explicit 'type' exports are removed.
