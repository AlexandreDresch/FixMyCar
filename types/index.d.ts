declare interface CreateClientParams {
  name: string;
  email: string;
  phone: string;
}

declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
