import { CountryDto, saarem } from "./contry.api";
import { EnsignDto, saaremEnsign } from "./ensign.api";

export interface LordDto {
  id: number;
  name: string;
  country: CountryDto;
  ensign: EnsignDto;
}

export const voguromTanHartag: LordDto = {
  id: 1,
  name: "Vogurom tan Hartag",
  country: saarem,
  ensign: saaremEnsign,
};
