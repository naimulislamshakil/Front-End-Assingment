type Message = {
	message?: '';
};

export type Register = {
	message?: Message;
	error: string | null;
	isLoading: boolean;
};

export interface PerUser {
	name: string;
	email: string;
	password: string;
}

export interface LoginPerUser {
	email: string;
	password: string;
}
