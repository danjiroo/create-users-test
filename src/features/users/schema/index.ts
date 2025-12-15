import { z } from 'zod';

const addressSchema = z.object({
  street: z.string().min(1, 'Street is required'),
  suite: z.string().min(1, 'Suite is required'),
  city: z.string().min(1, 'City is required'),
  zipcode: z.string().min(1, 'Zipcode is required'),
  geo: z.object({
    lat: z.string().min(1, 'Latitude is required'),
    lng: z.string().min(1, 'Longitude is required'),
  }),
});

const companySchema = z.object({
  name: z.string().min(1, 'Company name is required'),
  catchPhrase: z.string().min(1, 'Catch is required'),
  bs: z.string().min(1, 'Business slogan is required'),
});

export const createUserSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  username: z.string().min(1, 'Username is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(1, 'Phone number is required'),
  website: z.string().min(1, 'Website is required'),
  address: addressSchema,
  company: companySchema,
});

export type CreateUserType = z.infer<typeof createUserSchema>;
