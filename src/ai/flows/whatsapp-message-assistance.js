// src/ai/flows/whatsapp-message-assistance.js
'use server';
/**
 * @fileOverview An AI agent to assist users in composing initial WhatsApp messages.
 *
 * - generateInitialMessage - A function that generates an initial WhatsApp message.
 * - GenerateInitialMessageInput - The input type for the generateInitialMessage function.
 * - GenerateInitialMessageOutput - The return type for the generateInitialMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateInitialMessageInputSchema = z.object({
  topic: z.string().describe('The topic or reason for contacting support.'),
});


const GenerateInitialMessageOutputSchema = z.object({
  message: z.string().describe('The AI-generated initial message for WhatsApp.'),
});


export async function generateInitialMessage(input) {
  return generateInitialMessageFlow(input);
}

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
  async input => {
    const {output} = await prompt(input);
    return output;
  }
);
