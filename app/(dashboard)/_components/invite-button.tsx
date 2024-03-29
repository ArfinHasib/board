import { Plus } from 'lucide-react';
import { OrganizationProfile } from '@clerk/nextjs';

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export const InviteButton = () => {
   return (
      <Dialog>
         <DialogTrigger asChild>
            <Button variant='outline'>
               <Plus className='h-4 w-4 mr-2' />
               Invite members
            </Button>
         </DialogTrigger>
         <DialogContent className='p-0 bg-transparent before-none max-w-[880px] border-none'>
            <OrganizationProfile />
         </DialogContent>
      </Dialog>
   );
};
