# App Services
- Watch for changes in `[main]` and reflect in `[vendor]`
- Watch for `[main]::vendor` changes and delete from original `[vendor]`
- Pull `[vendor]::status` into `[main]`
  - until multi-column mirror support?
  - although multi-column mirror support may not work with differing status lists
- Search for dangling references
  - pulses in `[vendors]`
  - dropdown values
- Watch for `[all boards]::ship date` changes -> Move `[all boards]::timeline`

# App Interfaces
- New board
  - Set Title and Status column title
  - Share with vendor contacts?
  - Create automation(s) in `[main]`
  - Setup statuses
- New pulse

# Automation
- when `[main]::vendor(1 or 2)` changes, copy pulse to `[vendor]`
- `[vendor]::status = :green:` -> move to complete

# TODO:

- [ ] Add Shipping Column