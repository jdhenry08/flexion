"use client";

import { useState } from "react";

import { cn } from "~/lib/utils";
import { convert } from "~/lib/units";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

export default function HomePage() {
  const [input, setInput] = useState("");
  const [inputUnit, setInputUnit] = useState("");
  const [outputUnit, setOutputUnit] = useState("");
  const [output, setOutput] = useState("");

  return (
    <Card className="w-[480px]">
      <CardHeader>
        <CardTitle className="text-4xl font-extrabold">
          Unit Conversion Grader
        </CardTitle>
      </CardHeader>

      <CardContent className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="inputValue">Input value</Label>
          <Input
            type="number"
            id="inputValue"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="inputUnit">Units from</Label>
          <Select value={inputUnit} onValueChange={setInputUnit}>
            <SelectTrigger id="inputUnit">
              <SelectValue />
            </SelectTrigger>

            <SelectOptions />
          </Select>
        </div>

        <div>
          <Label htmlFor="outputUnit">Units to</Label>
          <Select value={outputUnit} onValueChange={setOutputUnit}>
            <SelectTrigger id="outputUnit">
              <SelectValue />
            </SelectTrigger>

            <SelectOptions />
          </Select>
        </div>

        <div>
          <Label htmlFor="outputValue">Output value</Label>
          <Input
            type="number"
            id="outputValue"
            value={output}
            onChange={(e) => setOutput(e.target.value)}
          />
        </div>
      </CardContent>

      <CardFooter>
        <Details />
      </CardFooter>
    </Card>
  );

  function SelectOptions() {
    return (
      <SelectContent>
        <SelectItem value="Kelvin">Kelvin</SelectItem>
        <SelectItem value="Celsius">Celsius</SelectItem>
        <SelectItem value="Fahrenheit">Fahrenheit</SelectItem>
        <SelectItem value="Rankine">Rankine</SelectItem>
        <SelectItem value="liters">liters</SelectItem>
        <SelectItem value="tablespoons">tablespoons</SelectItem>
        <SelectItem value="cubic-inches">cubic-inches</SelectItem>
        <SelectItem value="cups">cups</SelectItem>
        <SelectItem value="cubic-feet">cubic-feet</SelectItem>
        <SelectItem value="gallons">gallons</SelectItem>
      </SelectContent>
    );
  }

  function Details() {
    const baseClasses =
      "rounded-sm py-1.5 w-full px-3 bg-muted text-muted-foreground";
    const correctClasses = "bg-emerald-900 text-green-200";
    const incorrectClasses = "bg-rose-900 text-red-200";
    const invalidClasses = "bg-yellow-900 text-amber-200";

    const inputVal = parseFloat(input);
    const outputVal = parseFloat(output);

    if (inputUnit.length === 0 || outputUnit.length === 0) {
      return <p className={baseClasses}>Please fill out the form above</p>;
    }

    const convertedVal = convert(inputVal)[inputUnit]?.to[outputUnit];
    if (convertedVal === undefined) {
      return (
        <p className={cn(baseClasses, invalidClasses)}>
          Invalid: No conversion found between {inputUnit} and {outputUnit}
        </p>
      );
    }

    if (isNaN(inputVal) || isNaN(outputVal)) {
      return <p className={baseClasses}>Please fill out the form above</p>;
    }

    const inputRounded = inputVal.toFixed(1);
    const convertedRounded = convertedVal.toFixed(1); // Correct answer
    const outputRounded = outputVal.toFixed(1); // Student's answer

    return (
      <p
        className={cn(
          baseClasses,
          convertedRounded === outputRounded
            ? correctClasses
            : incorrectClasses,
        )}
      >
        {convertedRounded === outputRounded
          ? `Correct: ${inputRounded} ${inputUnit} = ${outputRounded} ${outputUnit}`
          : `Incorrect: ${inputRounded} ${inputUnit} = ${convertedRounded} ${outputUnit}`}
      </p>
    );
  }
}
