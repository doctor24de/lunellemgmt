export type Insight = {
  slug: string;
  title: string;
  description: string;
  category: string;
  published: string;
  readTime: string;
  intro: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
};

export const insights: Insight[] = [
  {
    slug: 'what-does-an-onlyfans-management-agency-do',
    title: 'What Does an OnlyFans Management Agency Actually Do?',
    description: 'A clear guide to OnlyFans management: strategy, profile operations, marketing, analytics and what creators should expect from a serious agency.',
    category: 'Creator management', published: '2026-09-09', readTime: '7 min read',
    intro: 'A creator management agency should do much more than post content or answer messages. The real job is to build the strategy, systems and daily operation that allow a creator to focus on the part nobody else can replace: creating.',
    sections: [
      { heading: 'The difference between assistance and management', paragraphs: ['Basic assistance completes isolated tasks. Management connects every task to a commercial strategy. Content planning informs promotion, promotion informs audience conversations, and performance data shapes the next creative cycle.', 'A strong agency creates clarity around positioning, publishing rhythm, audience journey and growth priorities. The creator still owns the voice and brand; the management team builds the operation around them.'] },
      { heading: 'What full-service management can include', paragraphs: ['The exact scope should match the creator, but the core functions usually cover the complete path from content to sustainable revenue.'], bullets: ['Brand positioning and content strategy', 'Profile optimisation and publishing schedules', 'Audience relationship and retention systems', 'Marketing across suitable discovery channels', 'Performance reporting and ongoing testing', 'Workflow, compliance and account security practices'] },
      { heading: 'Why strategy matters more than volume', paragraphs: ['Publishing more is not automatically a growth strategy. Creators need a clear reason for each content format, promotion channel and offer. A good plan protects creative energy by prioritising the work most likely to move the business forward.', 'That means reviewing real performance rather than copying whatever appears popular. The right cadence for one creator may be completely wrong for another because audience, niche, boundaries and goals are different.'] },
      { heading: 'What a creator should keep control of', paragraphs: ['Creators should retain clear ownership of their identity, content boundaries and long-term direction. Agreements should explain access, responsibilities, compensation, termination and the handling of private information in plain language.', 'Professional management should feel like leverage, not loss of control. The creator gains a capable operating team while remaining the final authority on their brand.'] },
      { heading: 'Questions to ask before joining an agency', paragraphs: ['Ask how the agency develops strategy, measures progress, protects access and communicates. Avoid anyone promising guaranteed income or relying on vague claims. Look for a team that can explain its process, expectations and reporting without pressure.', 'Lunelle is built for ambitious creators who want a selective, close partnership. We handle strategy, management and marketing while you stay focused on creating.'] },
    ],
  },
  {
    slug: 'fansly-growth-strategy-for-creators',
    title: 'A Sustainable Fansly Growth Strategy for Creators',
    description: 'Learn how positioning, consistent content systems, discovery and retention work together in a sustainable Fansly creator growth strategy.',
    category: 'Growth strategy', published: '2026-09-09', readTime: '6 min read',
    intro: 'Sustainable Fansly growth comes from a connected system—not one viral post. Positioning attracts the right audience, consistent content builds expectation, and retention turns initial attention into a durable creator business.',
    sections: [
      { heading: 'Start with a specific creator position', paragraphs: ['A memorable profile gives potential subscribers an immediate sense of personality, style and value. This does not require forcing yourself into a narrow character. It means identifying the qualities your best audience already responds to and expressing them consistently.', 'Your visual language, profile copy, previews and offers should feel like parts of the same world. Clarity makes promotion more effective because people understand why they should follow you.'] },
      { heading: 'Build a content system you can maintain', paragraphs: ['Consistency is easier when content is planned in batches and organised by purpose. Instead of deciding from scratch every day, build repeatable categories for discovery, connection, conversion and retention.'], bullets: ['Plan themes and formats before production days', 'Capture multiple usable assets from each setup', 'Maintain a realistic publishing calendar', 'Leave room for spontaneous and timely content', 'Review which formats create meaningful audience action'] },
      { heading: 'Treat discovery and conversion separately', paragraphs: ['Discovery content earns attention; profile content converts that attention into a relationship. They support each other, but they are not the same job. A large reach number is less valuable when visitors do not understand the profile or next step.', 'Track the path from channel to profile and from profile visit to subscriber. Use tagged campaign links where possible so decisions are based on sources rather than guesswork.'] },
      { heading: 'Retention is part of growth', paragraphs: ['Growth is not only acquisition. Clear expectations, a dependable experience and genuine audience care influence whether subscribers stay. Retention systems also protect the creator from constantly replacing lost attention.', 'This is where professional profile management can create leverage: maintaining consistency, organising conversations and spotting patterns while the creator preserves energy for content.'] },
      { heading: 'Review, learn and refine', paragraphs: ['A useful weekly review asks what attracted qualified visitors, what converted, what retained attention and what consumed time without returning value. Small, consistent improvements compound.', 'Lunelle builds this operating rhythm around each creator. The goal is not activity for its own sake—it is a brand and business that can keep growing without chaos.'] },
    ],
  },
  {
    slug: 'content-strategy-for-subscription-creators',
    title: 'Content Strategy for Subscription Creators: Build a System, Not a Grind',
    description: 'A practical content strategy framework for subscription creators who want consistency, stronger positioning and room to grow without burning out.',
    category: 'Content strategy', published: '2026-09-09', readTime: '7 min read',
    intro: 'The strongest creator content systems are designed around energy as well as output. A strategy should make it easier to create, clarify what each asset is meant to achieve and reduce the pressure of constant improvisation.',
    sections: [
      { heading: 'Give every content category a job', paragraphs: ['A content calendar becomes more useful when categories are tied to outcomes. Some posts introduce your world to new people. Others deepen connection, communicate an offer or reward existing supporters.', 'When every post tries to do everything, the message becomes unclear. Assigning a primary purpose makes creative decisions faster and performance easier to interpret.'] },
      { heading: 'Create pillars without becoming repetitive', paragraphs: ['Content pillars are recurring themes your audience recognises. They create structure, not restriction. Each pillar can contain different formats, settings, moods and stories while still reinforcing your brand.', 'Choose a small number of pillars that reflect your personality and audience interest. Review them periodically and evolve them as your brand grows.'] },
      { heading: 'Batch the production, personalise the experience', paragraphs: ['Batching reduces setup time and helps maintain quality. Plan multiple scenes, outfits or formats around one production block, then distribute the resulting assets intentionally across the calendar.', 'Efficiency should not make the audience experience feel automated. Timely captions, responsive communication and thoughtful sequencing preserve the human connection that makes creator brands valuable.'] },
      { heading: 'Protect boundaries and creative longevity', paragraphs: ['A professional plan starts with clear personal boundaries. Decide what you will create, what you will not create and how those choices are communicated. Growth that depends on repeatedly crossing your own limits is not sustainable.', 'The schedule should also include recovery and review. Creative energy is a business resource; protecting it is part of management.'] },
      { heading: 'Measure signals that guide better work', paragraphs: ['Track which themes attract profile visits, which previews create conversion and which formats strengthen retention. Avoid judging every post solely by visible engagement because different categories have different roles.', 'A management partner can connect these signals across content, marketing and profile performance. At Lunelle, that connected view becomes a practical strategy—so the creator can spend more time creating and less time managing complexity.'] },
    ],
  },
];

export function getInsight(slug: string) { return insights.find((insight) => insight.slug === slug); }
