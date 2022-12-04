import { types } from 'mobx-state-tree';

export const mainStore = types
   .model('mainStore', {
      authorized: types.optional(types.boolean, false), // Авторизованный пользователь
   })
   .actions(self => ({
      setAuthorized(newValue: boolean): void {
         console.log(self);
         self.authorized = newValue;
      },
   }));
