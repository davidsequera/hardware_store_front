import { Component } from '@angular/core';
import { UserContextService } from 'src/app/services/context/user-context.service';

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrls: ['./tool-list.component.css']
})
/**
 * Componente que muestra la lista de herramientas
 */
export class ToolListComponent {
  /**
   * Servicio de contexto de usuario
   */
  userContext: UserContextService;

  /**
   * Constructor
   * @param userContext Servicio de contexto de usuario
   */
  constructor(userContext: UserContextService) {
    this.userContext = userContext;
  }

  /**
   * Lista de herramientas, cada elemento es un objeto con las propiedades:
   * - name: nombre de la herramienta
   * - description: descripción de la herramienta
   * - link: enlace a la herramienta en Amazon
   * - brand: marca de la herramienta
    */
  tools: any[] = [
    {
        "id": "64408a1fc1cdbee2aa183956",
        "name": "Circular Saw",
        "description": "A power tool used to make straight cuts through wood or other materials"
    },
    {
        "id": "64408a1fc1cdbee2aa18395b",
        "name": "Angle Grinder",
        "description": "A power tool used to grind or cut metal or other hard materials"
    },
    {
        "id": "64408a1fc1cdbee2aa18395f",
        "name": "Paint Sprayer",
        "description": "A device used to apply paint to surfaces"
    },
    {
        "id": "64408a1fc1cdbee2aa18396b",
        "name": "Claw Hammer",
        "description": "A manual tool used for driving nails and removing them with its claw end"
    },
    {
        "id": "64408a1fc1cdbee2aa18396d",
        "name": "Earplugs",
        "description": "Protective devices used to reduce noise exposure and prevent hearing damage"
    },
    {
        "id": "64408a1fc1cdbee2aa18396f",
        "name": "Toolbox",
        "description": "A container used to store and transport tools"
    },
    {
        "id": "64408a1fc1cdbee2aa183972",
        "name": "Respirator Mask",
        "description": "Protective mask used to filter out harmful particles and fumes in the air"
    },
    {
        "id": "64408a1fc1cdbee2aa183975",
        "name": "Fire Extinguisher",
        "description": "Portable device used to extinguish small fires and prevent fire hazards"
    },
    {
        "id": "64408a1fc1cdbee2aa183976",
        "name": "Tool Belt",
        "description": "Belt used to hold and organize tools for easy access during work"
    },
    {
        "id": "64408a1fc1cdbee2aa18397a",
        "name": "Drill Bit Set",
        "description": "A set of drill bits with different sizes and types for drilling holes in various materials"
    },
    {
        "id": "64408a1fc1cdbee2aa18397b",
        "name": "Paint Roller Kit",
        "description": "A complete kit for painting walls, ceilings, and other surfaces with a roller"
    },
    {
        "id": "64408a1fc1cdbee2aa183981",
        "name": "Utility Knife",
        "description": "A versatile cutting tool with a retractable blade, used for various cutting tasks"
    },
    {
        "id": "64408a1fc1cdbee2aa18398a",
        "name": "Chisel Set",
        "description": "A set of chisels with various sizes and types for carving, shaping, or cutting wood or other materials"
    },
    {
        "id": "64408a1fc1cdbee2aa18398d",
        "name": "Safety Gloves",
        "description": "Protective gloves with durable materials for hand safety during DIY projects or construction work"
    },
    {
        "id": "64408a1fc1cdbee2aa18398f",
        "name": "Angle Grinder",
        "description": "A power tool used for cutting, grinding, and polishing various materials, such as metal or masonry"
    },
    {
        "id": "64408a1fc1cdbee2aa183994",
        "name": "Bench Vise",
        "description": "A clamping tool mounted on a workbench used for holding and securing materials during work"
    },
    {
        "id": "64408a1fc1cdbee2aa183995",
        "name": "Bolt Cutter",
        "description": "A cutting tool used for cutting through bolts, chains, wire mesh, or other heavy-duty materials"
    },
    {
        "id": "64408a1fc1cdbee2aa183957",
        "name": "Drill",
        "description": "A power tool used to make holes in wood or other materials"
    },
    {
        "id": "64408a1fc1cdbee2aa18395c",
        "name": "Tape Measure",
        "description": "A tool used to measure distances"
    },
    {
        "id": "64408a1fc1cdbee2aa183963",
        "name": "Belt Sander",
        "description": "A power tool used to sand wood or other materials quickly and efficiently"
    },
    {
        "id": "64408a1fc1cdbee2aa183966",
        "name": "Socket Set",
        "description": "A set of tools used to tighten or loosen nuts and bolts with a socket wrench"
    },
    {
        "id": "64408a1fc1cdbee2aa183968",
        "name": "Rotary Tool",
        "description": "A handheld power tool with a variety of interchangeable bits for sanding, grinding, and cutting"
    },
    {
        "id": "64408a1fc1cdbee2aa183969",
        "name": "Chainsaw",
        "description": "A power tool used to cut down trees and branches"
    },
    {
        "id": "64408a1fc1cdbee2aa18396c",
        "name": "Safety Glasses",
        "description": "Protective eyewear used to prevent eye injuries while working with tools or other hazardous materials"
    },
    {
        "id": "64408a1fc1cdbee2aa183974",
        "name": "First Aid Kit",
        "description": "Comprehensive first aid kit with essential medical supplies for emergencies"
    },
    {
        "id": "64408a1fc1cdbee2aa183977",
        "name": "Measuring Tape",
        "description": "A flexible ruler used to measure distances accurately"
    },
    {
        "id": "64408a1fc1cdbee2aa183978",
        "name": "Nail Gun",
        "description": "A power tool used for driving nails into wood or other materials quickly and efficiently"
    },
    {
        "id": "64408a1fc1cdbee2aa18397d",
        "name": "Angle Grinder",
        "description": "A versatile power tool used for cutting, grinding, and polishing metal, concrete, or other materials"
    },
    {
        "id": "64408a1fc1cdbee2aa18397e",
        "name": "Plunger",
        "description": "A tool used for unclogging drains and toilets by creating a vacuum to dislodge blockages"
    },
    {
        "id": "64408a1fc1cdbee2aa183982",
        "name": "Extension Cord",
        "description": "A long electrical cord used for extending the reach of power tools or other electrical devices"
    },
    {
        "id": "64408a1fc1cdbee2aa183983",
        "name": "Wireless Bluetooth Earplugs",
        "description": "Earplugs with built-in Bluetooth technology, ideal for reducing noise while listening to music or taking calls"
    },
    {
        "id": "64408a1fc1cdbee2aa18398e",
        "name": "Dust Mask",
        "description": "A respiratory mask designed to filter out dust, particles, and airborne contaminants for breathing protection"
    },
    {
        "id": "64408a1fc1cdbee2aa183997",
        "name": "Caulking Gun",
        "description": "A tool used for applying caulk or sealant to gaps or joints, providing a waterproof or airtight seal"
    },
    {
        "id": "64408a1fc1cdbee2aa183955",
        "name": "Screwdriver Set",
        "description": "A set of tools used to drive screws into wood or other materials"
    },
    {
        "id": "64408a1fc1cdbee2aa183959",
        "name": "Pliers",
        "description": "A hand tool used to grip and manipulate objects"
    },
    {
        "id": "64408a1fc1cdbee2aa18395a",
        "name": "Sledgehammer",
        "description": "A large, heavy hammer used to break up rocks or other hard materials"
    },
    {
        "id": "64408a1fc1cdbee2aa18395d",
        "name": "Air Compressor",
        "description": "A device used to,compress air and power pneumatic tools"
    },
    {
        "id": "64408a1fc1cdbee2aa183960",
        "name": "Nail Gun",
        "description": "A power tool used to drive nails into wood or other materials quickly and efficiently"
    },
    {
        "id": "64408a1fc1cdbee2aa183964",
        "name": "Jigsaw",
        "description": "A power tool used to make curved or intricate cuts in wood or other materials"
    },
    {
        "id": "64408a1fc1cdbee2aa18396a",
        "name": "Carpenter's Square",
        "description": "A tool used for measuring and marking right angles in woodworking"
    },
    {
        "id": "64408a1fc1cdbee2aa18396e",
        "name": "Work Gloves",
        "description": "Protective gloves used to provide hand safety and prevent injuries while working with tools or other materials"
    },
    {
        "id": "64408a1fc1cdbee2aa183970",
        "name": "Safety Vest",
        "description": "High-visibility vest used to increase visibility and safety in construction sites or other hazardous areas"
    },
    {
        "id": "64408a1fc1cdbee2aa18397f",
        "name": "Caulking Gun",
        "description": "A tool used for applying caulk or sealant to gaps or joints in construction or home improvement projects"
    },
    {
        "id": "64408a1fc1cdbee2aa183985",
        "name": "Screwdriver Set",
        "description": "A set of screwdrivers with various sizes and types for tightening or loosening screws"
    },
    {
        "id": "64408a1fc1cdbee2aa183987",
        "name": "Pliers Set",
        "description": "A set of pliers with different types for gripping, cutting, and bending wires or other materials"
    },
    {
        "id": "64408a1fc1cdbee2aa183989",
        "name": "Miter Saw",
        "description": "A power saw used for making accurate crosscuts or miter cuts in wood or other materials"
    },
    {
        "id": "64408a1fc1cdbee2aa183992",
        "name": "Tape Measure",
        "description": "A measuring tool with a retractable tape used for measuring distances, lengths, or widths"
    },
    {
        "id": "64408a1fc1cdbee2aa183993",
        "name": "Cordless Drill",
        "description": "A power drill that operates on rechargeable batteries, providing mobility and versatility"
    },
    {
        "id": "64408a1fc1cdbee2aa183996",
        "name": "Paint Sprayer",
        "description": "A device used for spraying paint or other coatings onto surfaces, providing a smooth and even finish"
    },
    {
        "id": "64408a1fc1cdbee2aa183954",
        "name": "Hammer",
        "description": "A tool used to drive nails into wood or other materials"
    },
    {
        "id": "64408a1fc1cdbee2aa183958",
        "name": "Wrench Set",
        "description": "A set of tools used to tighten or loosen nuts and bolts"
    },
    {
        "id": "64408a1fc1cdbee2aa18395e",
        "name": "Hand Saw",
        "description": "A manual tool used to cut wood or other materials"
    },
    {
        "id": "64408a1fc1cdbee2aa183961",
        "name": "Angle Drill",
        "description": "A power tool used to drill holes at an angle"
    },
    {
        "id": "64408a1fc1cdbee2aa183962",
        "name": "Cordless Screwdriver",
        "description": "A battery-powered tool used to drive screws into wood or other materials"
    },
    {
        "id": "64408a1fc1cdbee2aa183965",
        "name": "Miter Saw",
        "description": "A power tool used to make precise angled cuts in wood or other materials"
    },
    {
        "id": "64408a1fc1cdbee2aa183967",
        "name": "Level",
        "description": "A tool used to ensure that surfaces are level or plumb"
    },
    {
        "id": "64408a1fc1cdbee2aa183971",
        "name": "Hard Hat",
        "description": "Protective headgear used to protect the head from falling objects or impact"
    },
    {
        "id": "64408a1fc1cdbee2aa183973",
        "name": "Fall Protection Harness",
        "description": "Safety harness used to protect against falls from heights"
    },
    {
        "id": "64408a1fc1cdbee2aa183979",
        "name": "Wrench Set",
        "description": "A set of wrenches with different sizes for tightening or loosening nuts and bolts"
    },
    {
        "id": "64408a1fc1cdbee2aa18397c",
        "name": "Cordless Drill",
        "description": "A portable drill powered by a rechargeable battery, ideal for drilling holes and driving screws"
    },
    {
        "id": "64408a1fc1cdbee2aa183980",
        "name": "Step Ladder",
        "description": "A portable ladder with multiple steps or rungs, suitable for reaching high places"
    },
    {
        "id": "64408a1fc1cdbee2aa183984",
        "name": "Tape Measure",
        "description": "A flexible measuring tool used for measuring distances, lengths, and widths accurately"
    },
    {
        "id": "64408a1fc1cdbee2aa183986",
        "name": "Socket Wrench Set",
        "description": "A set of socket wrenches with different sizes for tightening or loosening nuts and bolts"
    },
    {
        "id": "64408a1fc1cdbee2aa183988",
        "name": "Adjustable Wrench",
        "description": "A wrench with an adjustable jaw for tightening or loosening nuts and bolts of different sizes"
    },
    {
        "id": "64408a1fc1cdbee2aa18398b",
        "name": "Wire Brush Set",
        "description": "A set of wire brushes with different bristle types for cleaning rust, paint, or debris from surfaces"
    },
    {
        "id": "64408a1fc1cdbee2aa18398c",
        "name": "Safety Goggles",
        "description": "Protective goggles with impact-resistant lenses for eye safety during DIY projects or construction work"
    },
    {
        "id": "64408a1fc1cdbee2aa183990",
        "name": "Pipe Cutter",
        "description": "A cutting tool used for cutting pipes made of different materials, such as copper, PVC, or steel"
    },
    {
        "id": "64408a1fc1cdbee2aa183991",
        "name": "Hacksaw",
        "description": "A hand saw with a fine-toothed blade used for cutting metal, plastic, or other hard materials"
    },
    {
        "id": "64408a1fc1cdbee2aa183998",
        "name": "Claw Hammer",
        "description": "A hammer with a claw-shaped end used for driving nails or removing nails or other fasteners"
    },
    {
        "id": "6440cc1e5873ab3c86253c05",
        "name": "Tornillo",
        "description": "esta es una prueba"
    },
    {
        "id": "6440cce2fa7d1a3b828f1991",
        "name": "Tornillo",
        "description": "esta es una prueba"
    }
]
  /**
   * Lista de marcas de herramientas
   * Cada elemento es un objeto con las propiedades:
   * - name: nombre de la marca
   */
  brands: any[] = [{"name":'Dewalt'}, {"name":'Milwaukee'}, {"name":'Ridgid'}, {"name":'Makita'}];
}
