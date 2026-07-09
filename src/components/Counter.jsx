import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

// Individual number (0–9)
function Number({ mv, number, height }) {
  const y = useTransform(mv, (latest) => {
    const placeValue = latest % 10;
    const offset = (10 + number - placeValue) % 10;
    let position = offset * height;

    if (offset > 5) {
      position -= 10 * height;
    }

    return position;
  });

  return (
    <motion.span
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        y,
      }}
    >
      {number}
    </motion.span>
  );
}

// Helpers
function normalizeNearInteger(num) {
  const nearest = Math.round(num);
  const tolerance = 1e-9 * Math.max(1, Math.abs(num));
  return Math.abs(num - nearest) < tolerance ? nearest : num;
}

function getValueRoundedToPlace(value, place) {
  const scaled = value / place;
  return Math.floor(normalizeNearInteger(scaled));
}

// Single digit column (simple bordered box)
function Digit({ place, value, height }) {
  const valueRoundedToPlace = getValueRoundedToPlace(value, place);
  const animatedValue = useSpring(valueRoundedToPlace, {
    stiffness: 120,
    damping: 20,
  });

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [valueRoundedToPlace]);

  return (
    <span
      style={{
        position: "relative",
        width: "1.8ch",
        height :"2.2ch",
        overflow: "hidden",
        display: "inline-block",

        border: "0.5px solid white",
        borderRadius: "1px",
      }}
    >
      {Array.from({ length: 10 }, (_, i) => (
        <Number key={i} mv={animatedValue} number={i} height={height} />
      ))}
    </span>
  );
}

// Main Counter
export default function Counter({
  value = 0,
  fontSize = 60,
  gap = 6,
  textColor = "white",
}) {
  const height = fontSize;

  const places = value
    .toString()
    .split("")
    .map((_, i, arr) => 10 ** (arr.length - i - 1));

  return (
    <div
      style={{
        display: "flex",
        gap,
        fontSize,
        color: textColor,
        fontWeight: "bold",
        lineHeight: 1,
      }}
    >
      {places.map((place, index) => (
        <Digit
          key={index}
          place={place}
          value={value}
          height={height}
        />
      ))}
    </div>
  );
}