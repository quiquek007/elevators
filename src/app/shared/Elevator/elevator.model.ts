import { IEsteticWall } from './childs/estetic-wall.model';
import { ITechProps } from './childs/tech-props.model';
import { IWireframes } from './childs/wireframes.model';

export interface IElevator extends IEsteticWall, ITechProps {
    wireframes?: IWireframes;
    name?: string;
}
