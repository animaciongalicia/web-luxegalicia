import type { Guide } from "../types";
import { guia as transporteCongresosEventosGalicia } from "./transporte-congresos-eventos-galicia";
import { guia as organizarEventoEnGaliciaAgencias } from "./organizar-evento-en-galicia-agencias";
import { guia as oportoGaliciaComoLlegar } from "./oporto-galicia-como-llegar";
import { guia as transporteCaminoDeSantiago } from "./transporte-camino-de-santiago";
import { guia as galiciaConChofer } from "./galicia-con-chofer";
import { guia as transportePalexco } from "./transporte-palexco";
import { guia as transportePalacioCongresosSantiago } from "./transporte-palacio-congresos-santiago";
import { guia as transporteIfeviVigo } from "./transporte-ifevi-vigo";
import { guia as comoLlegarEstadioRiazor } from "./como-llegar-estadio-riazor";
import { guia as transporteCidadeDaCultura } from "./transporte-cidade-da-cultura";
import { guia as transporteExpocoruna } from "./transporte-expocoruna";
import { guia as anoSanto2027TransporteGrupos } from "./ano-santo-2027-transporte-grupos";
import { guia as famTripGaliciaComoOrganizarlo } from "./fam-trip-galicia-como-organizarlo";
import { guia as oportoVigoTrenAutobusTraslado } from "./oporto-vigo-tren-autobus-traslado";
import { guia as caminoPortuguesCostaEtapasGrupos } from "./camino-portugues-costa-etapas-grupos";
import { guia as viajeIncentivosGalicia } from "./viaje-incentivos-galicia";
import { guia as conxemarTransporteVigo } from "./conxemar-transporte-vigo";
import { guia as uberTaxiChoferSantiagoDeCompostela } from "./uber-taxi-chofer-santiago-de-compostela";
import { guia as viajarCorunaVerDeportivo } from "./viajar-coruna-ver-deportivo";
import { guia as calendarioCongresosFeriasGalicia2027 } from "./calendario-congresos-ferias-galicia-2027";

// Orden de aparición en /guias: esenciales, sedes y artículos.
export const GUIAS_DATA: Guide[] = [
  transporteCongresosEventosGalicia,
  organizarEventoEnGaliciaAgencias,
  oportoGaliciaComoLlegar,
  transporteCaminoDeSantiago,
  galiciaConChofer,
  transportePalexco,
  transportePalacioCongresosSantiago,
  transporteIfeviVigo,
  comoLlegarEstadioRiazor,
  transporteCidadeDaCultura,
  transporteExpocoruna,
  anoSanto2027TransporteGrupos,
  famTripGaliciaComoOrganizarlo,
  oportoVigoTrenAutobusTraslado,
  caminoPortuguesCostaEtapasGrupos,
  viajeIncentivosGalicia,
  conxemarTransporteVigo,
  uberTaxiChoferSantiagoDeCompostela,
  viajarCorunaVerDeportivo,
  calendarioCongresosFeriasGalicia2027,
];
