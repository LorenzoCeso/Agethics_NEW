// This is a placeholder for the ChatGPT API integration
// You'll need to replace this with actual OpenAI API calls

export async function POST(request: Request) {
  try {
    const { message, context } = await request.json();

    // Replace this with actual OpenAI API call
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: `Sei l'assistente virtuale di AGETHICS. ${context} Rispondi in italiano in modo professionale e utile. Mantieni le risposte concise ma informative.`
          },
          {
            role: 'user',
            content: message
          }
        ],
        max_tokens: 150,
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    
    return new Response(JSON.stringify({
      response: data.choices[0].message.content
    }), {
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Chat API Error:', error);
    return new Response(JSON.stringify({
      response: 'Mi dispiace, si è verificato un errore. Riprova più tardi.'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}