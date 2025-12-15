'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/input';
import { Modal, type ModalProps } from '@/components/modal';
import { css } from '@/styled-system/css';
import { type CreateUserType, createUserSchema } from '../schema';
import type { User } from '../types';

type AddUserModalProps = Omit<ModalProps, 'children'> & {
  onAddUser: (data: User) => void;
};

export const AddUserModal: React.FC<AddUserModalProps> = ({
  onAddUser,
  ...props
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserType>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      name: '',
      username: '',
      email: '',
      phone: '',
      website: '',
      address: {
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        geo: { lat: '', lng: '' },
      },
      company: { name: '', catchPhrase: '', bs: '' },
    },
  });

  const onSubmit = (data: CreateUserType) => {
    const id = Date.now();

    onAddUser({ id, ...data });
  };

  return (
    <Modal {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          className={css({
            w: 'full',
            display: 'grid',
            gridTemplateColumns: '1fr',
          })}
        >
          <fieldset
            className={css({
              display: 'grid',
              gridTemplateColumns: '1fr',
              w: 'full',
              gap: 4,
              md: {
                gridTemplateColumns: '1fr 1fr',
              },
            })}
          >
            <Input
              label='Name'
              error={errors.name?.message}
              {...register('name')}
            />
            <Input
              label='Username'
              error={errors.username?.message}
              {...register('username')}
            />
            <Input
              label='Email'
              error={errors.email?.message}
              {...register('email')}
            />
            <Input
              label='Phone'
              error={errors.phone?.message}
              {...register('phone')}
            />
            <Input
              label='Website'
              error={errors.website?.message}
              {...register('website')}
            />
          </fieldset>

          <fieldset
            className={css({
              mt: 4,
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 4,
              md: {
                gridTemplateColumns: '1fr 1fr',
              },
            })}
          >
            <legend className={css({ fontWeight: 'bold', mb: 2 })}>
              Address
            </legend>
            <Input
              label='Street'
              error={errors.address?.street?.message}
              {...register('address.street')}
            />
            <Input
              label='Suite'
              error={errors.address?.suite?.message}
              {...register('address.suite')}
            />
            <Input
              label='City'
              error={errors.address?.city?.message}
              {...register('address.city')}
            />
            <Input
              label='Zip Code'
              error={errors.address?.zipcode?.message}
              {...register('address.zipcode')}
            />
            <Input
              label='Latitude'
              error={errors.address?.geo?.lat?.message}
              {...register('address.geo.lat')}
            />
            <Input
              label='Longitude'
              error={errors.address?.geo?.lng?.message}
              {...register('address.geo.lng')}
            />
          </fieldset>

          <fieldset
            className={css({
              my: 4,
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 4,
              md: {
                gridTemplateColumns: '1fr 1fr',
              },
            })}
          >
            <legend className={css({ fontWeight: 'bold', mb: 2 })}>
              Company
            </legend>
            <Input
              label='Name'
              error={errors.company?.name?.message}
              {...register('company.name')}
            />
            <Input
              label='Catch Phrase'
              error={errors.company?.catchPhrase?.message}
              {...register('company.catchPhrase')}
            />
            <Input
              label='BS'
              error={errors.company?.bs?.message}
              {...register('company.bs')}
            />
          </fieldset>

          <button
            type='submit'
            className={css({
              bg: '#44957d',
              color: 'white',
              px: 4,
              py: 2,
              borderRadius: 'sm',
              cursor: 'pointer',
              transition: 'all 0.2s linear',
              _hover: {
                bg: '#2b6352',
              },
            })}
          >
            Create User
          </button>
        </div>
      </form>
    </Modal>
  );
};
