import { Typography } from "@mui/joy";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({ href, name }: { href: string; name: string }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} replace={true}>
      <Typography
        level="title-md"
        borderRadius="sm"
        sx={{
          position: "relative",
          color: isActive ? "primary.solidBg" : "text.primary",
          fontWeight: "md",
          fontSize: "md",
        }}
      >
        {name}
      </Typography>
    </Link>
  );
};

export default ActiveLink;
