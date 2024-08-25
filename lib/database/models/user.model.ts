// clerkId, email, username, photo, firstName, lastName, planId, creditBalance

import { EmailAddress } from '@clerk/nextjs/server';
import { model, models, Schema } from 'mongoose';




const UserSchema = new Schema ({

    clerkID: { type: String, required: true, unique: true },
    email: { type: String, required: true , unique: true },
    userName: { type: String, required: true, unique: true },
    photo: { type: String },
    firstName: { type: String },
    LastName: { type: String},
    planID: { type: String, default:1 },
    creditBalance: { type: Number, default: 10 },
    
});

const User = models?.User || model('User', UserSchema);

export default User;