import { Card } from "compositions";
import { Flex } from "layout";
import {
  Button,
  Text,
  TextHeading,
  TextStrong,
  TextSubtitle,
} from "primitives";
import "./nike-run-club-10.css";

const runMetrics = [
  { label: "Distance", value: "10K" },
  { label: "Pace", value: "5:30/km" },
  { label: "Start", value: "9:00" },
];

export function NikeRunClub10() {
  return (
    <div className="nike-run-club-10">
      <main className="nike-run-club-10-content">
        <Flex
          className="nike-run-club-10-details"
          direction="column"
          alignSecondary="stretch"
        >
          <Flex direction="column" alignSecondary="stretch" gap="600">
            <TextStrong className="nike-run-club-10-eyebrow">
              NRC 10 · SUNDAY EDITION
            </TextStrong>
            <Flex direction="column" alignSecondary="stretch" gap="400">
              <TextHeading className="nike-run-club-10-title">
                SUNDAY RUN CLUB
              </TextHeading>
              <TextSubtitle className="nike-run-club-10-subtitle">
                Ten kilometers. One crew. Move together.
              </TextSubtitle>
            </Flex>
          </Flex>

          <Flex direction="column" alignSecondary="stretch" gap="300">
            {runMetrics.map(({ label, value }) => (
              <Card
                key={label}
                className="nike-run-club-10-metric"
                direction="horizontal"
                variant="stroke"
                padding="600"
              >
                <Flex direction="column" gap="200">
                  <Text>{label}</Text>
                  <TextHeading>{value}</TextHeading>
                </Flex>
              </Card>
            ))}
          </Flex>
        </Flex>

        <Flex direction="column" alignSecondary="stretch" gap="400">
          <Text className="nike-run-club-10-note">
            Meet at the east gate. Warm-up starts 08:45.
          </Text>
          <Button variant="primary" onPress={() => {}}>
            Join the run
          </Button>
        </Flex>
      </main>
    </div>
  );
}
