export type Exchange = {
  createdAt: Date;
  fromUser: string | null;
  id: string;
  plantOffered: string | null;
  plantRequested: string | null;
  status?: "Option1" | null;
  toUser: string | null;
  updatedAt: Date;
};
