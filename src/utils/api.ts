import emailjs from '@emailjs/browser';

import { FormType } from '@/components/email-form';

export type Dog = {
  name?: string;
  image_link: string;
  minHeight?: string;
  maxHeight?: string;
  minWeight?: string;
  maxWeight?: string;
  minLifeExpectancy?: string;
  max_life_expectancy?: string;
  shedding?: string;
  barking?: string;
  energy?: string;
  protectiveness?: string;
  trainability?: string;
  good_with_children?: string;
};

export type Data = { node: Dog };

const EMAIL_SERVICE_ID = process.env.GATSBY_SERVICE_ID;
const EMAIL_TEMPLATE_ID = process.env.GATSBY_TEMPLATE_ID;
const EMAIL_USER_ID = process.env.GATSBY_USER_ID;

export const transformResponse = (data: Data[]) => data.map(({ node }) => ({ ...node }));

export const parseResponse = (data: Data[]) => {
  if (data.length === 0) {
    return null;
  }

  const [spaPackage] = transformResponse(data.slice(0, 1));
  const collars = transformResponse(data.slice(1, 4));
  const carryOns = transformResponse(data.slice(4, 7));

  const trendingDescription = `Protectiveness is ${spaPackage.protectiveness} 
    and they are ${Number(spaPackage.good_with_children) > 2 ? 'good' : 'bad'} with children. 
    Barking level is ${spaPackage.barking} and energy is ${spaPackage.energy}.
    However they are ${Number(spaPackage.trainability) > 2 ? 'good' : 'bad'} to train.
  `;

  return { spaPackage, trendingDescription, collars, carryOns };
};

export const sendEmail = (data: FormType, reset: () => void) => {
  emailjs
    .send(
      EMAIL_SERVICE_ID as string,
      EMAIL_TEMPLATE_ID as string,
      { ...data },
      { publicKey: EMAIL_USER_ID }
    )
    .then(
      () => reset(),
      (error) => console.log(error)
    );
};
